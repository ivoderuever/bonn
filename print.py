import sys
from escpos import *

#Printer code for raspy
Epson = printer.Usb(0x04b8,0x0e28)
Epson.set(align="center", font="a", width=2, height=3)
Epson.text("What do you fear for the earth's future? \n\n\n\n")

Epson.set(align="left", font="a", width=3, height=3)
Epson.text(sys.argv[1] + "\n\n\n\n")

Epson.set(align="center", width=1, height=2, font="a")
Epson.image("qr.jpg", impl="bitImageColumn")
# Epson.qr('https://deruever.nl/', ec=0, size=9, model=2, native=True)
#Epson.text("\n Write with us \n\n\n\n")

Epson.cut()

print('Printing:' + sys.argv[1])
sys.stdout.flush()