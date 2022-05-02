<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Upcoming Events - Webview</title>
        <link rel="stylesheet" href="../assets/css/events.css"/>
        <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossorigin="anonymous">
    </head>

    <body>
        <div class="header">
            <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <a class="pure-menu-heading" href="">Levitation - Webview</a>
        
                <ul class="pure-menu-list">
                    <li class="pure-menu-item"><a href="../index.html" class="pure-menu-link">Home</a></li>
                    <li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Events</a></li>
                    <li class="pure-menu-item"><a href="tickets.html" class="pure-menu-link">Tickets</a></li>
                </ul>
            </div>
        </div>

        <div class="content-wrapper">
            <div class="content">
                <table class="pure-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Event</th>
                            <th>Time</th>
                            <th>Information</th>
                            <th>Created by</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php 
                        
                        $host = 'localhost';
                        $db = 'palace_essentials';
                        $user = 'azer';
                        $password = 'password121';
                        $dsn = "mysql:host=$host;dbname=$db;charset=UTF8";

                        try {
                            $pdo = new PDO($dsn, $user, $password);
                            $sql = "SELECT * FROM `event_struct`";

                            foreach ($pdo->query($sql) as $row) {
                                if($row['event_time'] != '-1') {
                                    echo('<tr class="pure-table-odd">');
                                    echo('<td>' . $row['id'] . '</td>');
                                    echo('<td>' . $row['event_name'] . '</td>');
                                    echo('<td>' . gmdate("Y-m-d\TH:i:s\Z", $row['event_time']) . '</td>');
                                    echo('<td>' . $row['event_information'] . '</td>');
                                    echo('<td>' . $row['created_by'] . '</td>');
                                    echo('</tr>');
                                }
                            }

                        } catch (PDOException $e) {
                            echo $e->getMessage();
                        }
                        
                        ?>
                    </tbody>
                </table>
            </div>
        
            <div class="content">        
                <div class="pure-g">        
                    <div class="l-box-lrg pure-u-1 pure-u-md-3-5">
                        <h4>Contact Us</h4>
                        <p>
                            For additional information, bugreports etc please contact azer#1685 on discord or <a href="https://twitter.com/paradad0x">@paradad0x</a> on twitter
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>