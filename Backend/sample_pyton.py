import os

def change_file_name(input_file_path, new_file_name):
    # Extract the directory and current file name from the input file path
    directory = os.path.dirname(input_file_path)
    current_file_name = os.path.basename(input_file_path)

    # Create the new file path by joining the directory and the new file name
    new_file_path = os.path.join(directory, new_file_name)

    try:
        # Rename the file
        os.rename(input_file_path, new_file_path)
        print("File name changed successfully.")
        return new_file_path
    except OSError as e:
        print(f"Error: {e}")
        return None