# Komponent Table - dokumentacja

## Renderowanie

Tablicę renderujemy poprzez użycie hooka `useTable` importowanego z ui-kit.
Podstawowy przykład użycia w kodzie:

```
    import { useTable } from '@landingi/landingi-ui-kit'

   const Component = () => {
        const [isLoading, setIsLoading] = useState(false)
        const [data, setData] = useState({
            collection: [],
            pagination: { counter: { total: 0, current: 0 } }
          })

         const { Table, pageLimit, refresh } = useTable({
            name: 'landings',
            columns,
            data: data.collection,
            i18n: {
              selected: t('word.selected'),
              first: t('pagination.word.first'),
              last: t('pagination.word.last')
            },
          })

          const fetchLandings = useCallback(async () => {
              setIsLoading(true)

              const newData = await getLandings({
                limit: pageLimit, <- hook udostępnia nam limit stron jaki ustawiliśmy w tabelce
              })

              if (newData) {
                setData(newData)
              }
          }, [pageLimit])

          useEffect(async () => {
            await fetchLandings()
          }, [fetchLandings, refresh]) <- dzięki dodaniu parametru refresh udostępnionego z hooka możemy manulanie triggerować odświeżenie tabeli

        return <Table />
   }
```

Poszczególne parametry hooka useTable będą wytłumaczone w następnym rozdziale.

## Propsy

- `name(wymagany)` - Nazwa tabeli, wykorzystywane do zapamiętywania parametru
  page size w localstorage
- `data(wymagany)` - Tablica z danymi do wylistowania, każdy element składa się
  z obiektu, w którym klucz `identifier` jest wymagany, reszta parametrów jest
  dowolna i ich definicję (jeśli korzystamy z typescripta) podajemy jako
  parametr do typu generycznego tzn. `useTable()` przykład poprawnego formatu
  itemu:
  ```
  {
      identifier: string | number; <- ten klucz jest wymagany, reszta tego obiektu to pola potrzebne przy dalszych etapach
      name: string; <- (przykład) na jego podstawie renderowana będzie wartość komórki, więcej info w następnym podpunkcie
      url: string;
      ...rest
  }[]
  ```
- `columns(wymagany)` - Tablica z obiektami, które definiują, z jakich kolumn
  będzie się składać wyrenderowana tabelka, w tym miejscu do tablicy możemy
  wprowadzić dwa rodzaje komumn: bazującą na `accessor key` oraz na customowym
  renderowaniu komórki, przykład

  ```
  type Width = number | `${number}%`

  export interface ColumnAccessor<Item> {
    identifier: string
    accessor: keyof Item <- Weryfikuje czy klucz, który podamy faktycznie istnieje w pojedynczym elemencie w tablicy data
    width?: Width <- Opcjonalne, customowa szerokość pola podawana w px lub %
    header?: string <- Nazwa wyświetlana w headerze
  }

  export interface CustomColumn<Item> {
    identifier: string
    render: (item: Item, handleRefresh: () => void) => ReactNode <- funkcja, w której wyrenderować możemy customową komórkę, udostępnia nam wszystkie dane pojedynczego elementu w tablicy data i callback do odświeżenia tablicy
    width?: Width
    header?: string
  }

  const columns = [
          {
              header: 'column based on accessor key',
              identifier: 'accessor-column-identifier',
              accessor: 'name', <- Tutaj możemy wprowadzić tylko i wyłącznie klucz, który istnieje na pojedynczym elemencie w tabeli data, w tym przypadku jest to klucz 'name', który podałem wyżej ts będzie to weryfikował
              width: '100%' <- Wartość liczbowa (px) lub procentowa, type Width = number | `${number}%`
          },
          {
              header: 'info',
              identifier: 'info',
              render: info => <LandingInfo {...info} />,
              width: '100%'
          },
      ]
  ```

  Możemy mieszać ze sobą typy kolumn na poziomie tablicy, natomiast nie możemy
  zdefiniować jednocześnie accessor i render w jednym obiekcie, ts rzuci błędem.

- `i18n` - props składa się z 3 kluczy z tłumaczeniami, wykorzystywane w
  paginacji i headerze, nie jest wymagany, domyślne wartości w kodzie poniżej
  ```
  {
      selected: string <- selected/wybrano [default = word.selected]
      first: string <- First/Pierwsza [default = word.first]
      last: string <- Last/Ostatnia [default = word.last]
  }
  ```
- `rowActions` - Funkcja renderująca na hoverze wiersza panel z dowolnym
  komponentem (przyciski z akcjami w przypadku listy landingów)
  ```
      rowActions?: (item: Item, handleRefresh: () => void) => ReactNode
  ```
  funkcja, w której wyrenderować możemy dowolny komponent, udostępnia nam
  wszystkie dane pojedynczego elementu w tablicy data i callback do odświeżenia
  tablicy
- `options` - Po podaniu tego argumentu renderują się po lewej stronie tabelki w
  osobnej kolumnie renderują się checkboxy, dzięki którym możemy zaznaczyć
  wybrane elementy w tabelce, w przypadku listy landingów renderowany jest tu
  dropdown move oraz przycisk do archiwizacji
  ```
  options?: (
  identifiers: Item['identifier'][], <- tabela z identyfikatorami zaznaczonych elementów
  handleRefresh: () => void <- callback do odświeżania tablicy
  ) => ReactNode
  ```
- `filtersAndSorters` - Jak nazwa wskazuje filtry i sortery danych, **domyślnie
  renderuje się nad tabelką**, jesli chcemy wyrenderować ten komponent w miejscu
  headera(np, tak jak na liście landingów), należy wyłączyć renderowanie
  headera(info w opisie następnego hooka)

  ```
    filtersAndSorters?: (handleRefresh: () => void) => ReactNode
  ```

  Ponownie jak we wcześniejszych przypadkach, props udostępnia nam callback do
  triggerowania odświeżenia tabelki

- `hasHeader` - Definiuje czy header z nazwami kolumn ma się renderować, jeżeli
  tak to filtry będą renderować się nad nim, jeżeli nie to filtry będą w miejscu
  headera, domyślnie ustawione jest na **true**

- `isLoading` - Przekazujemy stan ładowania, jeżeli true w miejscu danych
  renderuje się loader

- `emptyMessage` - Funkcja renderująca komponent informujący o braku danych,
  renderuje się jeżeli `isLoading` jest **true** i `data.length` jest równe
  **zero**

- `pagination` - Podanie tego argumentu spowoduje wyrenderowanie paginacji,
  jeśli spełnione będą odpowiednie wymagania tzn. `pagination.total > pageLimit

  ```
   pagination?: {
       current: number <- obecna ostona paginacji 1,2,3,4...
       total: number <- liczba wszystkich elementów w kolekcji
       handlePageChange?: (page: number) => void <- tę funkcję możemy wykorzystać do triggerowania fetchowania nowych danych, wywoływana jest poprzez kilnięcie na aktywny button w paginacji
   }
  ```

- `constantPageLimit` - Selector limitu elementów na stronie w prawym dolnym
  roku nie będzie renderowany, a page limit będzie ustawiony na stałą wartość
  podaną w tym propsie
- `externalBorder` - Border na zewnętrznych krawędziech tabelki, domyślnie
  ustawione na **false**
- `extraHeaderContent` - Funkcja renderująca dowolny komponent na **ostatnim
  miejscu w headerze**, nie wpływa na renderowanie kolumn w body tabelki

  ```
    extraHeaderContent?: (handleRefresh: () => void) => ReactNode
  ```

  Ponownie jak we wcześniejszych przypadkach, props udostępnia nam callback do
  triggerowania odświeżenia tabelki
