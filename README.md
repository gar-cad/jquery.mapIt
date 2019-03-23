# jquery.codeIt

A simple jquery plugin that generates links from postcodes / zipcodes to google maps (can be customised).

### Prerequisites

jquery 2.0.1


### Set up

Install the plugin, and use the following source code as an example. Basic use (using the default syntax), more examples can be found in the demo folder.

##### HTML
```
    <div id="ex1">
        The postcode for Anfield is L4 0TH.
    </div>
```

##### javascript
```
<script src="http://code.jquery.com/jquery-2.0.1.min.js"></script>
<script src="src/jquery.mapIt.min.js"></script>
<script>
    $(function () {
        $('#ex1').mapIt();
    });
</script>
```

## Examples

View the examples in the demo folder. 

## Author

* **Gareth Cadwaladr** - *Initial work* - [gar-cad](https://github.com/gar-cad)

See also the list of [contributors](https://github.com/gar-cad/jquery.dataTree/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.MD) file for details