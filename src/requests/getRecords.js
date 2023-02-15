// getRecords.js - Fetches Kintone records, transforms response, & returns array of objects per record
/**
 * Notes on Kintone responses:
 * record.$id.value = value of the Record number field (unique key for the record)
 */

export default async function getRecords() {

  const body = {
    'app': kintone.app.getId(),
    'query': kintone.app.getQuery(),
  };

  const resp = await kintone.api(kintone.api.url('/k/v1/records', true), 'GET', body
  );
  let listItemArray = [];

  let respRecords = resp.records; // array of records (objects)

  listItemArray = respRecords.map(function (record) {
    return {
      uniqueKey: record.$id.value, // $id = Automatically generated Record ID
    }
  });

  return listItemArray;
};