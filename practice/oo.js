let grades = {
    list: {egoing:10, k8805:6, sori:80},
    show: function() {
        for(let name in this.list) {
            document.write(name+':'+this.list[name]+"<br />");
        }
    }
}

grades.show()