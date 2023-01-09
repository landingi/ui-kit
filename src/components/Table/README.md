# Komponent <Table /> dokumentacja

## Renderowanie komponentu

Tablicę renderujemy poprzez użycie hooka `useTable` importowanego z ui-kit.
Przykład użycia w kodzie:

```
    import { useTable } from '@landingi/landingi-ui-kit'

   const Component = () => {
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

        return <Table />
   }
```

Poszczególne paramatry hooka useTable będa wytłumaczone w następnym rozdziale.

## Propsy

- `name` - nazwa tabeli, wykorzystywane do zapamiętywania paramatru page size w
  localstorage
- `data` - tablica z danymi do wylistowania, każdy element składa się z obiektu
  w którym klucz `identifier` jest wymagany, reszta parametrów jest dowolna i
  ich definicję(jeśli korzystamy z typescripta) podajemy jako paramatr do typu
  generycznego tzn. `useTable<TypPojedynczegoItemu>()` przykład poprawnego
  formatu itemu:
  ```
  {
      identifier: string | number; <- ten klucz jest wymagany, reszta tego obiektu to pola potrzebne przy dalszych etapach
      name: string; <- (przykład)na jego podstawie renderowana będzie wartość komórki, więcej info w następnym podpunkcie
      url: string;
      ...rest
  }[]
  ```
- `columns` - tablica z obiektami, które definiują z jakich kolumn będzie się
  składać wyrenderowana tabelka, w tym miejscu do tablicy możemy wprowadzić dwa
  rodzaje komumn: bazującą na `accessor key` oraz na customowym ranerowaniu
  komórki, przykład

  ```
  type Width = number | `${number}%`

  export interface ColumnAccessor<Item> {
    identifier: string
    accessor: keyof Item <- weryfikuje czy klucz który podamy faktycznie istnieje w pojedynczym elemencie w tablicy data
    width?: Width <- opcjonalne, customowa szerokośc pola podawana w px lub %
    header?: string <- nazwa wyświetlana w headerze
  }

  export interface CustomColumn<Item> {
    identifier: string
    render: (item: Item, handleRefresh: () => void) => ReactNode <- funkcja w której wyrenderować możemy customową komórkę, udostępnia nam wszystkie dane pojedynczego elementy w tablicy data i callback do odświeżenia tablicy
    width?: Width
    header?: string
  }

  const columns = [
          {
              header: 'column based on accessor key',
              identifier: 'accessor-column-identifier',
              accessor: 'name', <-tutaj możemy wprowadzić tylko i wyłącznie klucz który istnieje na pojedynczym elemencie w tabeli data, w tym przypadkujest to klucz 'name', który podałem wyżej ts będzie to weryfikował
              width: '100%' <- wartość liczbowa(px) lub procentowa, type Width = number | `${number}%`
          },
          {
              header: 'info',
              identifier: 'info',
              render: info => <LandingInfo {...info} />,
              width: '100%'
          },
      ]
  ```

  Nie możemy mieszać ze sobą typów kolumn i zdefiniować jednocześnie accessor i
  render w jednym obiekcie, ts rzuci błędem.

- `i18n` - props wymagany składa się z 3 kluczy z tłumaczeniami
  ```
  {
      selected: string
      first: string
      last: string
  }
  ```
