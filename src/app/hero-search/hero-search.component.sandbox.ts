import { TestModule } from './../test/test.module';
import { sandboxOf } from 'angular-playground';
import { HeroSearchComponent } from './hero-search.component';

export default sandboxOf(HeroSearchComponent, { imports: [TestModule] }).add(
  'default',
  {
    template: `<app-hero-search></app-hero-search>`,
  }
);
