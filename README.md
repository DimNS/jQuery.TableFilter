# jQuery.TableFilter

Плагин для фильтрации строк таблиц путем ввода символов в поле фильтра

## Требования
1. jQuery v3+

## Установка
```bash
npm i jquery-tablefilter
```

## Подключение
```javascript
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

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

## Параметры
- **afterFilter** *{null|function}* (по умолчанию: `null`) - функция обратного вызова, срабатывает каждый раз после применения фильтра
  Применение:
  ```javascript
  $('.filter').TableFilter({
      afterFilter: function() {
          console.log('afterFilter fired');
      }
  });
  ```