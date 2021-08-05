(module
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (memory $0 0)
 (export "sum" (func $assembly/index/sum))
 (export "memory" (memory $0))
 (func $assembly/index/sum (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
 )
)
