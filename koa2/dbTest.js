const { query } = require('./util/async-db');

async function selectAllData() {
    try {
        let sql = 'select * from person';
        let dataList = await query(sql);
        return dataList;
    }catch(err){
        console.log(err);
    }
}

async function getData() {
    let dataList = await selectAllData();
    console.log(dataList);

}

getData();