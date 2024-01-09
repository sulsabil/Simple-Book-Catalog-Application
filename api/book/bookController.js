import Book from "./bookModel.js";

export const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    if (!books) {
      return error;
    }
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

export const createBook = async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body);
    return res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

export const getUserBooks = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const books = await Book.find({ userRef: userId });
    res.status(200).json({ success: true, books });
  } catch (error) {
    next(error);
  }
};

export const fetchBookDetail = async (req, res, next) => {
  

  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json("No book found");
    }
    res.status(200).json(book);
  } catch (e) {
    next(e);
  }
};
