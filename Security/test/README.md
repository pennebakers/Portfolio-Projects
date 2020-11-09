# Note!!!!

The files within the malware folder are actual malware files. When downloading the file, don't fun those files!!!!

# Security Portfolio

I just want to showcase this with my interest in the security field. 

## Program

This is a simple python program that loops through the malware folder that is currently holding several malware files. The program loops through each files file header and checks the memory addresses. The memory addresses should each be skipping by 0x20, if it isn't, then the file is considered malware. 

```bash
python enum_exports.py 'File location'
```

