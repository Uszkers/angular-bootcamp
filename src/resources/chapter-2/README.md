# Rozdział 2

W drugim rozdziale omówimy, czym są **serwisy** oraz jak mogą być wykorzystane do wymiany informacji między
komponentami. Omówimy również
kwestię routingu w Angularze, co umożliwi nam tworzenie stron edycji i dodawania zadań przy użyciu FormsAPI,
zarówno w podejściu **reactive-forms**, jak i **template-driven-forms**.

## 2.1 (branch chapter-2.1)

Na pierwszy ogień dodamy 2 nowe
komponenty [edit-todo.component](../../app/todos/todo-management/edit-todo/edit-todo.component.ts)
oraz [add-todo.component](../../app/todos/todo-management/add-todo/add-todo.component.ts) i
umieścimy [todo-list.component](../../app/todos/todo-list/todo-list.component.ts), oraz nowo dodane komponenty
do [app-routing.module](../../app/app-routing.module.ts), aby umożliwić nawigację po
aplikacji.

## 2.2 (branch chapter-2.2)

W tym podrozdziale stworzymy formularz dodawania TODO przy użyciu **template-driven form** jednego z dwóch Angularowych
sposobów na tworzenie formularzy.

## 2.3 (branch chapter-2.3)

Kolejne na tapet wejdzie formularz edycji TODO którego stworzymy przy użyciu **reactive forms** drugiego sposobu z
Angularowego **Forms API**

## 2.4 (branch chapter-2.4)

W tej części szkolenia stworzymy serwis, w którym będziemy przechowywać stan TODOsów, pozwoli nam to na implementacje
edycji oraz dodawania. Skorzystamy też z local storage, aby przechowywać stan TODOsów, między sesjami

## 2.5 (branch chapter-2.5)

Super, że udało nam się poprawić błąd, ale czy można było to zrobić lepiej? Skorzystamy z tej okazji, aby trochę się
cofnąć i dokonać małego refactoru, oraz wprowadzić kilka nowych pojęć takich jak. **Subject**, **Observable**, *
*zarządzanie
subskrypcją** czy **async pipe**
