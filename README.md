编译：
    首先编译基本的二进制：make compile && build_standalone_db_migrator
    
    接着编译基础镜像（如果想编译trivy，修改Makefile里的trivy_flag=true）： make build_base_docker

    最后编译镜像： make build，但可能没有编译trivy的镜像，需要修改make/phton/Makefile里的_build_trivy_adapter目标，取消自动编译二进制的命令，手动拉取二进制到make/phton/trivy_adapter/binary下面（scanner_trivy和trivy），再执行make build
    打包： make package_offline
