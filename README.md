# Game_Of_Life

### Zapraszam do gry

#### http://maciejf.pl/gameoflife/

## Opis

Gra napisana obiektowo zgodnie z założeniami automatu komórkowego wymyślonego w 1970 roku przez Johna Conwaya. <br>
W grze nie ma graczy . Udział człowieka sprowadza się jedynie do ustalenia wielkości planszy, 
rozdzielczości, czasu trwania pojedynczego cyklu, ilości początkowych komórek jako % wszystkich dostępnych na planszy.<br>
<img alt="Logo" src="http://maciejf.pl/img/GoL4.jpg" height="120px"><br>
Aby rozpocząć symulację należy nacisnąć przycisk PLAY.

### Użyte technologie:
<img alt="Logo" src="http://maciejf.pl/img/gameOfLife/gameOfLife.png" />

## Zasady

> - Gra toczy się na planszy podzielonej na kwadratowe komórki.
> - Każda ma ośmiu sąsiadów, czyli komórek przylegających do niej bokami i rogami.
> - Każda komórka może znajdować się w jednym z dwóch stanów: "żywa" lub "martwa".
> - Stany komórek zmieniają się w każdym cyklu.
> - Stan komórki zależy tylko od liczby jej żywych sąsiadów.

### Reguły

> - Martwa komórka, która ma dokładnie 3 żywych sąsiadów, staje się żywa w następnej jednostce czasu (rodzi się).
> - Żywa komórka z 2 albo 3 żywymi sąsiadami pozostaje nadal żywa, przy innej liczbie sąsiadów umiera (z „samotności” albo „zatłoczenia”)

<img alt="Logo" src="http://maciejf.pl/img/GoL1.jpg" width="100%"/>    
<img alt="Logo" src="http://maciejf.pl/img/gameOfLife/gif/complete1.gif" />
