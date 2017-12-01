BuzzwordModel = function() {
        
    var self = this;

    self.buzzword01 = [
        "Integrated","Total","Systematized","Parallel","Functional",
        "Responsive","Optimal","Synchronized","Compatible","Balanced"];    
    self.buzzword02 = [
        "Management","Organizational","Monitored","Reciprocal","Digital","Logistical",
        "Transitional","Incremental","Third-generation","Policy"];
    self.buzzword03 = [
        "Options","Flexibility","Capability","Mobility","Programming",
        "Concept","Time-phase","Projection","Hardware","Contingency"];

    self.buzzword = ko.observable();

    self.bw = function(a) {
        return a[Math.trunc(Math.random()*a.length)];
    }

    self.r1 = Math.trunc(Math.random()*self.buzzword01.length)
    self.r2 = Math.trunc(Math.random()*self.buzzword01.length)
    self.r3 = Math.trunc(Math.random()*self.buzzword01.length)

    self.generateBuzzword = function() { 
        i1 = Math.trunc(Math.random()*self.buzzword01.length);
        while (i1 == self.r1)
            i1 = Math.trunc(Math.random()*self.buzzword01.length);

        i2 = Math.trunc(Math.random()*self.buzzword02.length);
        while (i2 == self.r2)
            i2 = Math.trunc(Math.random()*self.buzzword02.length);

        i3 = Math.trunc(Math.random()*self.buzzword03.length);
        while (i3 == self.r3)
            i3 = Math.trunc(Math.random()*self.buzzword03.length);

        self.r1 = i1; self.r2 = i2; self.r3 = i3;

        var res =  self.buzzword01[self.r1] + " " + self.buzzword02[self.r2]+" " + self.buzzword03[self.r3];
        self.buzzword(res); 
    }
    
    self.generateBuzzword();    
}
