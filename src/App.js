import React from 'react';
import {Card, DataTable, Page} from '@shopify/polaris';

export default function DataTableExample() {
  const rows = [
    ['Catering by Anna Hasiuk', 'Premade Food', 'Belfast','https://www.facebook.com/cateringannahasiuk/'],
    ['Jackson Greens', 'Fruit & Veg', 'Belfast', 'https://www.jacksongreensonline.co.uk/'],
  ];

  return (
    <Page title="Support Small Buisnesses Still Delivering NI">
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'text',
            'text',
            'text',
          ]}
          headings={[
            'Name',
            'Type',
            'Delivering to',
            'Contact'
          ]}
          rows={rows}
        />
      </Card>
    </Page>
  );
}
