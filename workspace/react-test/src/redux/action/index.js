//action 은 데이터 변경 흐름을 위한 데이터다..
//함수로 제공해서 함수 호출하면.. action 데이터 발생하게..
//외부에서 호출할거다.. export...
export const testAction = (data) => {
    console.log('testAction......')
    return {
        //생략불가능한건 type
        type:'TEST_ACTION',
        data//data:data축약..
    }
}