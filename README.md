# jQuery.TableFilter

Плагин для фильтрации строк таблиц путем ввода символов в поле фильтра

## Требования
1. jQuery v2+

## Установка
```bash
bower install --save jquery-tablefilter
```

## Подключение
```javascript
<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>

<script type="text/javascript" src="dist/jquery.tablefilter.min.js"></script>
```

## Использование
```html
<input type="text" class="filter" data-tablefilter="#table" placeholder="Начните вводить для фильтрации">

<table id="table">
    <tbody>
        <tr>
            <td>John Dow</td>
            <td>Worker</td>
        </tr>
        <tr>
            <td>Jane Dow</td>
            <td>Stewardess</td>
        </tr>
        <tr>
            <td>Eva Green</td>
            <td>Actress</td>
        </tr>
    </tbody>
</table>

<script type="text/javascript">
    $(function () {
        $('.filter').TableFilter();
    });
</script>
```