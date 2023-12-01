import sys
from escpos import *
import socket

def get_ip():
  s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
  s.settimeout(0)
  # Doesn’t even have to be reachable.
  s.connect_ex(("10.254.254.254", 1))
  ip = s.getsockname()[0]
  ip = "127.0.0.1" if ip == "0.0.0.0" else ip
  s.close()
  return ip

IP = get_ip() + ":8080"

#Printer code for raspy
Epson = printer.Usb(0x04b8,0x0e28)
Epson.text(sys.argv[1])
Epson.qr('http://' + IP)
Epson.cut()

print('Printing:' + sys.argv[1])
sys.stdout.flush()