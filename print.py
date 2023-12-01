import sys
from escpos import *

print(sys.argv[1])

# Printer code for raspy
# Epson = printer.Usb(0x04b8,0x0202)
# Epson.text('Hello World')
# Epson.cut()

sys.stdout.flush()