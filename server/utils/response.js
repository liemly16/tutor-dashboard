module.exports = {
    responseUnauthorize: (res) => {
        res.send({
            code: 403,
            message: "Bạn không có quyền ở chức năng này"
        })
    }
}