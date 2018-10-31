 fname=input("Enter file name:") 
  fopen=open(fname) 
  days=dict() 
  
 
  for lines in fopen: 
      if lines.startswith("From"): 
          take=lines.split()  #lines into words 
          try: 
              words=take[2]    #to extract days 
              days[words]=days.get(words,0)+1  #important line 
          except: 
              continue 
  
 
  
 
  print(days) 
