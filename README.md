# Internal Review Priorities

Upload and process .csv files to rank the data in order of priority.

[View it live here.](https://sullivown.github.io/internal-review-priorities/])

## How to use

Upload a valid .csv file via the upload view, edit the uploaded data if needed, process the data and view the output in the output view.

## More Details

### Upload

Upload a .csv file. If you have previously uploaded a file it should be saved in localStorage and be able to be edited/viewed via the Edit and Output views.

### Edit

Edit the uploaded raw data here. If you have processed the data, changes will be reflected once the data has been re-processed.

### Output

View processed data, edit weights and assign algorithms. You can also print or save the data as .pdf by clicking the relevent button.

### Settings

View and/or edit algorithms here. Each algorithm can be edited using JavaScript. Algorithms recieve <code>value</code> as a parameter and must return a <code>score</code> value.
