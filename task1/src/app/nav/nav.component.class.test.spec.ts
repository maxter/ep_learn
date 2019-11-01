import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let sut: NavComponent;

  beforeEach(() => {
    sut = new NavComponent();
  });

  describe('Example of testing as a class', () => {
    it('Bread crumbs should show "Cources"', () => {
      expect(sut.BreadCrumb).toBe('Cources');
    });
  });

});
