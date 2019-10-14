// 引入处理命令行参数的包
// yargs 的理解node.js中使用yargs来处理命令行参数（多的我现在也不知道）
import yargs from 'yargs'
const args = yargs
  .option('production', {
    boolean:true,
    default:false,
    describe:"min all scripts"
  })
  .option('watch',{   //控制是否监听
    boolean:true,
    default:false,
    describe:'watch all files'
  })
 
  .option('verbose',{//详细输出命令行日志
    boolean:true,
    default:false,
    describe:'log'
  })
