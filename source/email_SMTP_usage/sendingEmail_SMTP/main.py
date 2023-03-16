import smtplib

"""made new emails to try out the code"""
my_gmail = "pythontrial0429@gmail.com"
my_yahoomail = "pythontry0429@yahoo.com"
password = "hxlbakzgjjcgssfa"

try:
    connection = smtplib.SMTP("smtp.gmail.com", 587)
    connection.ehlo()
    connection.starttls()
    connection.login(user=my_gmail, password=password)
    connection.sendmail(from_addr=my_gmail, to_addrs="pythontry0429@yahoo.com", msg="FUck YoU")
    connection.close()
except:
    print
    "something went wrong"
