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

    self.generateBuzzword = function() { 
        var res =  self.bw(self.buzzword01) + " " + self.bw(self.buzzword02)+" " + self.bw(self.buzzword03);
        self.buzzword(res); 
    }
    
    self.generateBuzzword();    
}
