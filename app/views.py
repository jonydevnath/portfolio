from django.shortcuts import render
from django.core.mail import send_mail
from django.utils.html import format_html

# Create your views here.
def home(request):
    if request.method == "POST":
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        phone = request.POST['phone']
        message = request.POST['message']

        subject = f"{fname} {lname}"
        message_content = f"{message} Email: {email} Phone: {phone}"

        # HTML email template
        html_message = format_html(
            """
            <html>
            <body style="font-family: 'Poppins', system-ui; background-color: #f4f4f4; padding: 20px;">
                <table style="width: 100%; max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 10px;">
                    <tr>
                        <td style="text-align: center; padding: 10px; background-color: #0c2452; color: white; border-radius: 10px 10px 0 0;">
                            <h2>{} {}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px;">
                            <p style="font-size: 16px; color: #333;">{}</p>
                            <p style="font-size: 14px; color: #555;"><strong>Email:</strong> {}</p>
                            <p style="font-size: 14px; color: #555;"><strong>Phone:</strong> {}</p>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
            """,
            fname, lname, message, email, phone
        )

        # send an email
        send_mail(
            subject,
            message_content,  # plain text message
            email,  # from email
            ['jonydevnath724@gmail.com'],  # to email
            html_message=html_message,  # HTML version of the message
        )

        # send_mail(
        #     fname + " " + lname, # subject
        #     message + " Phone: " + phone, # message
        #     email, # form email
        #     ['jonydevnath724@gmail.com'], # To Email
        # )

        return render(request, 'home.html', {"fname": fname, "lname": lname, "email": email, "phone": phone, "message": message})
    else:
        return render(request, "home.html", {})