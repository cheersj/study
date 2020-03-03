# class A:
# 	def run(self):
# 		print('a is runing')

# class B:
# 	def run(self):
# 		print('b is runing')

# class C(A, B):
# 	pass

# C().run()

class A:
	def run(self):
		print('a is runing')

class B(A):
	pass

# class C:
class C(A):
	def run(self):
		print('c is runing')

class D(B,C):
	pass

D().run()
		