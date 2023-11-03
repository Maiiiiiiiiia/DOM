src/application.js
Реализуйте и экспортируйте по умолчанию функцию игры крестики-нолики на поле из 9 ячеек (представлены таблицей). В упражнении дается готовая функция генерации поля. Воспользуйтесь ей для инициализации игры. Поле нужно добавить в тег с классом .root.

Затем по клику игра ставит поочередно x и o на поле. Подразумевается, что оба игрока играют за одним компьютером и просто кликают по очереди.

Выигрыш в игре никак не отмечается.

Изначальная верстка:

<div class="root">
  <table class="table-bordered">
    <tbody>
      <tr>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
      </tr>
      <tr>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
      </tr>
      <tr>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
      </tr>
    </tbody>
  </table>
</div>
После клика по центру:

<div class="root">
  <table class="table-bordered">
    <tbody>
      <tr>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
      </tr>
      <tr>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3">x</td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
      </tr>
      <tr>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
      </tr>
    </tbody>
  </table>
</div>
Подсказки
Достаточно повесить событие на всю таблицу и использовать возможности всплытия
Ход меняется на каждый клик, в том числе по заполненной ячейке, при этом значение в заполненной ячейке остается прежним