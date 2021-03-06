import * as React from 'react';
import { GridIconSlotsComponent } from '../gridIconSlotsComponent';

export interface ApiRefComponentsProperty extends GridIconSlotsComponent {
  /**
   * Column menu component rendered by clicking on the 3 dots "kebab" icon in column headers.
   */
  ColumnMenu: React.ElementType;
  /**
   * Error overlay component rendered above the grid when an error is caught.
   */
  ErrorOverlay: React.ElementType;
  /**
   * Footer component rendered at the bottom of the grid viewport.
   */
  Footer: React.ElementType;
  /**
   * Header component rendered above the grid column header bar.
   */
  Header: React.ElementType;
  /**
   * Loading overlay component rendered when the grid is in a loading state.
   */
  LoadingOverlay: React.ElementType;
  /**
   * No rows overlay component rendered when the grid has no rows.
   */
  NoRowsOverlay: React.ElementType;
  /**
   * Pagination component rendered in the grid footer by default.
   */
  Pagination: React.ElementType;
}

export interface ComponentsApi {
  /**
   * The set of overridable components used in the grid.
   */
  components: ApiRefComponentsProperty;
}
