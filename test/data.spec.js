import { getData, sortData, filterDataByDirector, filterDataByProducer, computeStats } from '../src/data.js';

const mockData = [
  {"title":"Castle in the Sky", "release_date": "1986", "director": "Hayao Miyazaki", "producer": "Isao Takahata"},
  {"title":"My Neighbor Totoro", "release_date": "1988",  "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki"},
  {"title":"Kiki's Delivery Service", "release_date": "1989", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki"}
]

describe('getData', () => {
  it('Debería ser una función', () => {
    expect(typeof getData).toBe("function")
  });
});

describe('sortData', () => {
  it('Debería ordenar de la A a la Z', () => {
    expect(sortData(mockData,"az")).toEqual([
      {"title":"Castle in the Sky", "release_date": "1986", "director": "Hayao Miyazaki", "producer": "Isao Takahata"},
      {"title":"Kiki's Delivery Service", "release_date": "1989", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki"},
      {"title":"My Neighbor Totoro", "release_date": "1988",  "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki"}
    ]);
  });
  it('Debería ordenar de la Z a la A', () => {
    expect(sortData(mockData, "za")).toEqual([
      {"title":"My Neighbor Totoro", "release_date": "1988",  "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki"},
      {"title":"Kiki's Delivery Service", "release_date": "1989", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki"},
      {"title":"Castle in the Sky", "release_date": "1986", "director": "Hayao Miyazaki", "producer": "Isao Takahata"}
    ]);
  });
  it('Debería order por fechas descendentes (last movies)', () => {
    expect(sortData(mockData, "lastMovies")).toEqual([
      {"title":"Kiki's Delivery Service", "release_date": "1989", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki"},
      {"title":"My Neighbor Totoro", "release_date": "1988",  "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki"},
      {"title":"Castle in the Sky", "release_date": "1986", "director": "Hayao Miyazaki", "producer": "Isao Takahata"}
    ]);
  });
  it('Debería order por fechas ascendentes (first movies)', () => {
    expect(sortData(mockData, "firstMovies")).toEqual([
      {"title":"Castle in the Sky", "release_date": "1986", "director": "Hayao Miyazaki", "producer": "Isao Takahata"},
      {"title":"My Neighbor Totoro", "release_date": "1988",  "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki"},
      {"title":"Kiki's Delivery Service", "release_date": "1989", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki"}
    ]);
  }); 
});

describe('filterDataByDirector', () => {
  it('Debería filtrar por director', () => {
    expect(filterDataByDirector(mockData,"Hayao Miyazaki")).toEqual([
      {"title":"Castle in the Sky", "release_date": "1986", "director": "Hayao Miyazaki", "producer": "Isao Takahata"},
      {"title":"My Neighbor Totoro", "release_date": "1988",  "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki"},
      {"title":"Kiki's Delivery Service", "release_date": "1989", "director": "Hayao Miyazaki", "producer": "Hayao Miyazaki"}
    ]);
  });
  it('Debería retornar un array vacío', () => {
    expect(filterDataByDirector(mockData,"Isao Takahata")).toEqual([]);
  });
});

describe('filterDataByProducer', () => {
  it('Debería filtrar por productor', () => {
    expect(filterDataByProducer(mockData,"Isao Takahata")).toEqual([
      {"title":"Castle in the Sky", "release_date": "1986", "director": "Hayao Miyazaki", "producer": "Isao Takahata"}
    ]);
  });
  it('Debería retornar un array vacío', () => {
    expect(filterDataByProducer(mockData,"Toru Hara")).toEqual([]);
  });
});

describe('computeStats', () => {
  it('Debería calcular porcentaje de película seleccionada (33)', () => {
    const condition = [{"title":"Castle in the Sky", "release_date": "1986", "director": "Hayao Miyazaki", "producer": "Isao Takahata"}];
    expect(computeStats(mockData,condition)).toEqual(33);
  });
});
