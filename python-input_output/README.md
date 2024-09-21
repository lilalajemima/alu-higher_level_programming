This is the project directory for the python input-output
Functions i learnt:
open() returns a file object, and is most commonly used with two positional arguments and one keyword argument: open(filename, mode, encoding=None)

For the example f is a file object
>>> f = open('workfile', 'w', encoding="utf-8") 

To read a file’s contents, call f.read(size), which reads some quantity of data and returns it as a string (in text mode) or bytes object (in binary mode). 

f.readline() reads a single line from the file; a newline character (\n) is left at the end of the string, and is only omitted on the last line of the file if the file doesn’t end in a newline.

If you want to read all the lines of a file in a list you can also use list(f) or f.readlines().


