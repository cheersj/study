groups = [['allen', 'bob'], ['camel', 'duck'], ['eye']]

# names = []
# for group in groups:
# 	for name in group:
# 		names.append(name)
# print(names)

# names = sum(groups, [])
# print(names)

# a = sum([1,2,3])
# a = sum([2,3,4], 0) 
# print(a)

# a = sum([['jack'], ['kim'], ['lemon']], [])
# print(a)

a = [e for group in groups for e in group]
print(a)