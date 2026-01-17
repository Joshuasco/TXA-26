# import os
# from fastapi import FastAPI, BackgroundTasks
# from mailjet_rest import Client

# app = FastAPI()

# # Initialize Mailjet Client
# api_key = os.environ.get('MJ_APIKEY_PUBLIC')
# api_secret = os.environ.get('MJ_APIKEY_PRIVATE')
# mailjet = Client(auth=(api_key, api_secret), version='v3.1')

# def send_mailjet_email(to_email: str, subject: str, content: str):
#     data = {
#         'Messages': [
#             {
#                 "From": {
#                     "Email": "your-verified-sender@domain.com", # Must be verified in Mailjet
#                     "Name": "Your App Name"
#                 },
#                 "To": [{"Email": to_email}],
#                 "Subject": subject,
#                 "TextPart": content,
#                 "HTMLPart": f"<h3>{content}</h3>"
#             }
#         ]
#     }
#     result = mailjet.send.create(data=data)
#     return result.status_code

# @app.post("/send-welcome/")
# async def welcome_user(email: str, background_tasks: BackgroundTasks):
#     # Add email sending to background tasks to keep the response fast
#     background_tasks.add_task(send_mailjet_email, email, "Welcome!", "Thanks for joining!")
#     return {"message": "Email is being sent"}













# import os
# from fastapi import FastAPI, BackgroundTasks
# from mailjet_rest import Client

# app = FastAPI()

# # Credentials from Render Environment Variables
# api_key = os.environ.get('MJ_APIKEY_PUBLIC')
# api_secret = os.environ.get('MJ_APIKEY_PRIVATE')
# mailjet = Client(auth=(api_key, api_secret), version='v3.1')

# def send_transactional_template(email: str, name: str, template_id: int, vars: dict):
#     data = {
#         'Messages': [
#             {
#                 "From": {
#                     "Email": "noreply@yourdomain.com", # Must be verified in Mailjet
#                     "Name": "Your App Support"
#                 },
#                 "To": [{"Email": email, "Name": name}],
#                 "TemplateID": template_id,
#                 "TemplateLanguage": True, # Required to interpret {{var:key}}
#                 "Variables": vars
#             }
#         ]
#     }
#     result = mailjet.send.create(data=data)
#     return result.status_code

# @app.post("/signup")
# async def signup(email: str, firstname: str, background_tasks: BackgroundTasks):
#     # Pass data to the template
#     template_vars = {"firstname": firstname, "app_link": "https://myapp.com/login"}
    
#     # 1234567 is the Template ID from your Mailjet Dashboard
#     background_tasks.add_task(send_transactional_template, email, firstname, 1234567, template_vars)
    
#     return {"status": "User created and welcome email queued"}

