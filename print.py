import sys
from escpos import *

#Printer code for raspy
Epson = printer.Usb(0x04b8,0x0e28)
Epson.text(sys.argv[1])
Epson.qr('https://deruever.nl/', ec=0, size=3, model=2, native=False, center=True, impl='bitImageRaster')
Epson.cut()

print('Printing:' + sys.argv[1])
sys.stdout.flush()