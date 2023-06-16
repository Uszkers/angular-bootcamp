# Rozdział 2

W drugim rozdziale przeanalizujemy zagadnienie routingu w Angularze, co pozwoli nam na tworzenie stron edycji i
dodawania zadań za pomocą FormsAPI, zarówno przy użyciu podejścia **reactive-forms**, jak i **template-driven-forms**.
Będziesz
również miał okazję dowiedzieć się, czym są serwisy oraz jak można ich używać do wymiany informacji między komponentami.
Dodatkowo zapoznasz się z biblioteką RxJs, która jest powszechnie wykorzystywana w całym frameworku.

## 2.1 (branch chapter-2.1) Routing

Na wstępie dodamy 2 nowe
komponenty **edit-todo.component**
oraz **add-todo.component** i
umieścimy **todo-list.component**, oraz nowo dodane komponenty
do app-routing.module, aby umożliwić nawigację po
aplikacji oraz dalsze jej rozbudowywanie.

## 2.2 (branch chapter-2.2) Template-driven forms

W tym podrozdziale stworzymy formularz dodawania zadania przy użyciu **template-driven form** jednego z dwóch Angularowych
sposobów na tworzenie formularzy.

## 2.3 (branch chapter-2.3) Reactive forms

Kolejne na tapet wejdzie formularz edycji zadania, którego stworzymy przy użyciu **reactive forms** drugiego sposobu z
Angularowego **Forms API**

## 2.4 (branch chapter-2.4) Serwisy i Dependency Injection; Lifecycle hooks

W tej części szkolenia:
- stworzymy serwis, w którym będziemy przechowywać stan listy zadań; pozwoli nam to na implementacje edycji oraz dodawania,
- skorzystamy z **local storage**, aby przechowywać stan listy zadań między sesjami
- pobieżnie przejdziemy przez cykl życia komponentu i skorzystamy z **lifecycle hooka** `ngOnInit`

## 2.5 (branch chapter-2.5) RxJs i refactoring

W tym rozdziale dokonamy małego refactoru, który będzie okazją do porozmawiania o bibliotece RxJs służącej do programowania reaktywnego i wykorzystywanej powszechnie w całym framewrku.
W szczególności omówimy:
- **Observable**
- **Subject** (w tym **BehaviorSubject**),
- **zarządzanie subskrypcją** (tu również kolejny **lifecycle hook**: `ngOnDestroy`)
- **async pipe**
