names = []
doc_count = 0
mod_count = 0
file = open("log.txt", "r")

#Searches for Renaming of .docx files
for a in file:
    if a.find("Rename") != -1:
        if a.find("->") != -1:
            if a.find(".docx") != -1:
                doc_count += 1

#resetting pointer to the beginning of the file to read again.
file.seek(0)

#Searches for More than 3 files in ScapeGoat folder have been modified
for b in file:
    if b.find("Modify: ScapeGoat\\") != -1:
        mod_count += 1 

file.seek(0)

#Searches for The number of file self-deletes activity is larger than or equal to 1.
for c in file:
    if c.find("File Create") != -1:
        i,o = c.split(":")
        names.append(o)
    elif c.find("File Delete") != -1:
        p,q = c.split(":")
        names.append(q)


if doc_count > 3:
    if mod_count > 3:
        #if it has to get rid of duplicates in the list then there was a create and delete for a file with the same name. 
        if len(names) != len(set(names)):
            print("malware detected --> HEUR:Trojan\nRansom.DocxEncrypt.Generic")
else:
    print("No Malware Detected!")

