# Python Katas

A minimal Python environment for practicing coding katas using Python 3.13.5.

## Requirements

- Python 3.13.5

## Setup

1. Verify Python version:
```bash
python --version
# Should show Python 3.13.5
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
```bash
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```

4. Upgrade pip (recommended):
```bash
python -m pip install --upgrade pip
```

5. Install dependencies:
```bash
pip install -r requirements.txt
```

## Running Tests

Run all tests:
```bash
pytest
```

Run tests with coverage:
```bash
pytest --cov=src
```

Run tests in watch mode:
```bash
pytest-watch
```

## Project Structure

```
python/
├── src/                    # Source code for katas
│   ├── __init__.py
│   └── fizz_buzz.py
├── test/                   # Test files
│   ├── __init__.py
│   └── test_fizz_buzz.py
├── requirements.txt        # Python dependencies
├── pytest.ini            # Pytest configuration
├── .gitignore            # Git ignore file
└── README.md             # This file
```

## Available Katas

- **FizzBuzz**: Classic kata for practicing conditionals and loops

## Adding New Katas

1. Create a new module in `src/`
2. Add corresponding tests in `test/`
3. Follow the naming convention: `test_*.py` for test files
4. Use descriptive test names that explain the behavior

## Best Practices

- Write tests first (TDD approach)
- Keep functions small and focused
- Use meaningful variable names
- Add docstrings for complex functions
- Follow PEP 8 style guidelines
- Use Python 3.13.5 features like improved error messages and performance optimizations

## Python 3.13.5 Notes

This environment is specifically designed for Python 3.13.5, which includes:
- Improved error messages and debugging
- Performance optimizations
- Enhanced type system support
- Better memory management