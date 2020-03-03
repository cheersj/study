from decimal import Decimal
a = 0.1
b = 0.2
c = 0.3
assert Decimal(str(a)) + Decimal(str(b)) == Decimal(str(c)) 