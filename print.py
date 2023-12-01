import sys
from escpos import *

print('Printing:' + sys.argv[1])

#Printer code for raspy
Epson = printer.Usb(0x04b8,0x0e28)
Epson.text(sys.argv[1])
Epson.cut()

sys.stdout.flush()