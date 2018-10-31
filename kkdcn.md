#List Comprehensions
#Hackkerank

x = int(input())
y = int(input())
z = int(input())
n = int(input())
m=list()
for i in range(x+1):
    for j in range(y+1):
        for k in range(z+1):
            if(i+j+k!=n):
                m.append([i,j,k])
            else:
                continue
print(m)
