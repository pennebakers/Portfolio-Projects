import pefile
import sys
import glob

hex_difference = -0x20
names = []
hex_values_str = []
hex_values = []

directory = (glob.glob(sys.argv[1]))

for i in directory:
    malware_file = i
    pe = pefile.PE(malware_file)
    print(i)
    if hasattr(pe, 'DIRECTORY_ENTRY_EXPORT'):
        for exp in pe.DIRECTORY_ENTRY_EXPORT.symbols:

            #Append into lists to be manipulated and to compare values.
            names.append(exp.name)
            hex_values_str.append(hex(exp.address + pe.OPTIONAL_HEADER.ImageBase))
            hex_values.append(exp.address + pe.OPTIONAL_HEADER.ImageBase)

        #counters
        a = 0
        b = 0
        c = 0

        #Compare names
        for xport_names in names:
            if(xport_names.count(names[a]) > 1):
                print("WARNING, two or more export functions have the same name, itʼs a malware\t %s" % names[a])
                a += 1
            else:
                a += 1

        #Checking for same memory address
        for xport_values in hex_values_str:
            if(hex_values_str[b] == None or hex_values_str[b+1] == None or hex_values_str[b+2] == None):
                b += 1
                continue
            if((hex_values_str[b] == hex_values_str[b+1]) & (hex_values_str[b+1] == hex_values_str[b+2])):
                print("\tWARNING, three or more export functions have the same memory address, itʼs a malware")
                b += 1

        #subtracting hexadecimal values next to each other, if not 0x20 then its malware
        for values in hex_values:
            basehex = hex_values[c]
            sechex = hex_values[c+1]

            sum = basehex - sechex

            if(sum != hex_difference):
                print("WARNING,  three or more export functions have the same memory offset, it's a malware")
            
        #clear the lists once we are done to not waste memory??
        names.clear()
        hex_values.clear()
        hex_values_str.clear()