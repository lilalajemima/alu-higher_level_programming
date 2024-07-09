#!/usr/bin/python3
"""
   define a class called 'Square'
"""


class Square:
    """
    square has a private instance attribute : 'size'
    """

    def __init__(self, size):
        """
        Args:
             size (int): size of the square (object)
        """
        self.__size = size
