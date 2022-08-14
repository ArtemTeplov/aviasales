export function tabCheap() {
    return {
      type: 'TAB',
      order: 'cheapest',
    };
  }
  
  export function tabFast() {
    return {
      type: 'TAB',
      order: 'fastest',
    };
  }

  export function tabOptimal() {
    return {
        type: 'TAB',
        order: 'optimal'
    }
  }
  
  export function transfersAll() {
    return {
      type: 'TRANSFERS',
      transfers: 'all',
    };
  }
  
  export function transfersNone() {
    return {
      type: 'TRANSFERS',
      transfers: 'none',
    };
  }
  
  export function transfers1() {
    return {
      type: 'TRANSFERS',
      transfers: '1',
    };
  }
  
  export function transfers2() {
    return {
      type: 'TRANSFERS',
      transfers: '2',
    };
  }
  
  export function transfers3() {
    return {
      type: 'TRANSFERS',
      transfers: '3',
    };
  }