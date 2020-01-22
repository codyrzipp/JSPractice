<?php
//Turn on error reporting -- this is critical!
ini_set('display_errors', 1);
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS practice</title>
</head>
<body>


<script>


    function heeHaw(number) {

        for (let i = 1; i < number;) {
            if (i % 3 === 0 && i % 5 === 0) {
                document.write("!HeeHaw!");
                document.write("\n");
                i++;

            }
            if (i % 3 === 0) {
                document.write("Hee");
                document.write("\n");
                i++;

            }
            if (i % 5 === 0) {
                document.write("Haw");
                document.write("\n");
                i++;

            }
             else {
                document.write(i);
                document.write("\n");
                i++;

            }
        }

    }
    heeHaw(20);
</script>
</body>

</html>