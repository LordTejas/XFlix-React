import os
import unittest
import filecmp
from xcompany import run

class XcompanyTests(unittest.TestCase):

    # TODO: WARNING!!!
    #  DO NOT MODIFY ANY FILES IN THE TESTS/ ASSESSMENTS UNLESS ASKED TO.
    #  Any modifications in this file may result in Assessment failure!

    def test_XcompanyApplication_assessment(self):
        # Arrange

        cwd = os.path.dirname(os.path.abspath(__file__))

        inputFile = os.path.join(cwd,"input1.txt")
        actualOutputFile = os.path.join(cwd,"output.txt")
        expectedOutputFile = os.path.join(cwd,"output1.txt")
        # Act
        run(inputFile,actualOutputFile)
        # Assert
        self.assertTrue(filecmp.cmp(expectedOutputFile,actualOutputFile))



if __name__ == '__main__':
    unittest.main()