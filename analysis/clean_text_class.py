import string
import re

class clean_text:
    '''Deal with metadata for books
    from Gutenberg project. Clean the
    text'''

    def __init__(self, text):
        self.text = text

    ## Helper to take care of the metadata:
    def get_metadata(self, text):
        ''' Build a dictionary with metadata from
        the top of the text file'''
        with open(text, 'r') as text_file:
            meta =  text_file.read(590)
            title, author, language = "", "", ""
            try:
                t = re.search("Title: [A-Za-z'\t' .]+", meta)
                a = re.search("Author: [A-Za-z'\t' .]+", meta)
                l = re.search("Language: [A-Za-z'\t' .]+", meta)
                title += t.group(0)
                author += a.group(0)
                language += l.group(0)
            except:
                print("No metadata found!")
            metadata = {"title": title.replace("Title: ", ""),
                        "author": author.replace("Author: ", ""),
                        "language": language.replace("Language: ", "")}
        return metadata

    ## Helpers to actually clean the whole text:
    ## Remove the the metadata:
    def remove_metadata(self, text):
        ''' Returns the text as a string
        without the metadata at the top.'''
        with open(text, 'r') as text_file:
            text_file.read(683)
            clean_text = text_file.read().strip().lower()
        return clean_text

    ## List all chapters present:
    def get_all_chapters(self, text):
        ''' Returns a list of all chapters in a book.'''
        chapters = re.findall(r"chapter \w+", text)
        return chapters

    ## Get one chapter from a text
    def get_chapter(self, text, chapter):
        ''' Returns the text for a chapter specified.'''
        # Use regex to retrieve the text between
        # the chapter specified and the next chapter
        chapter_text = re.g(r"^(%s) (chapter \w+.)$" % chapter, text)
        return chapter_text

    ## Remove "Chapter x":
    def remove_chapters(self, text_str):
        ''' Returns the whole text as a string
        without "Chapter x".'''
        clean_text = re.sub(r"chapter \w+.", "", text_str)
        return clean_text

    ## Get rid of the punctuation:
    def remove_punctuation(self, text_str):
        """Returns a string without
        punctuation"""
        clean_text = re.sub(r"[,\.\(\)_\*:?!']", "", text_str)
        return clean_text

    # Add a function to return a list of words
    def whole_text_words(self, text_cleaned):
        list_words = text_cleaned.split()
        return list_words

    # Add a function to return a string of letters
    def text_letters(self, text_cleaned):
        list_letters = [l for l in text_cleaned if l not in ['\n', ' ']]
        return list_letters


if __name__ == "__main__":
    test = clean_text('books/alice.txt')
    #print test.get_metadata(test.text)
    no_meta = test.remove_metadata(test.text)
    #print no_meta
    #print test.get_all_chapters(no_meta)
    print(test.get_chapter(no_meta, 'chapter i'))
    #print test.remove_chapters(no_meta)
    #print test.remove_punctuation(no_meta)
    #print test.whole_text_words(cleaned)
    #print test.text_letters(cleaned)
