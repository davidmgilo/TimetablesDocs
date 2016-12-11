
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">[Global Namespace]</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:CreateAttendancesTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateAttendancesTable.html">CreateAttendancesTable</a>                    </div>                </li>                            <li data-name="class:CreateDesirataTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateDesirataTable.html">CreateDesirataTable</a>                    </div>                </li>                            <li data-name="class:CreateProposedLessonsTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateProposedLessonsTable.html">CreateProposedLessonsTable</a>                    </div>                </li>                            <li data-name="class:CreateShiftsTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateShiftsTable.html">CreateShiftsTable</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Scool</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Timetables</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Database</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Scool_Timetables_Database_Seeds" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Scool/Timetables/Database/Seeds.html">Seeds</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Scool_Timetables_Database_Seeds_DatabaseSeeder" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Scool/Timetables/Database/Seeds/DatabaseSeeder.html">DatabaseSeeder</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Http</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Scool_Timetables_Http_Controllers" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Scool/Timetables/Http/Controllers.html">Controllers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Scool_Timetables_Http_Controllers_AttendancesController" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Scool/Timetables/Http/Controllers/AttendancesController.html">AttendancesController</a>                    </div>                </li>                            <li data-name="class:Scool_Timetables_Http_Controllers_Controller" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Scool/Timetables/Http/Controllers/Controller.html">Controller</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Scool_Timetables_Http_Requests" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Scool/Timetables/Http/Requests.html">Requests</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Scool_Timetables_Http_Requests_AttendanceCreateRequest" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Scool/Timetables/Http/Requests/AttendanceCreateRequest.html">AttendanceCreateRequest</a>                    </div>                </li>                            <li data-name="class:Scool_Timetables_Http_Requests_AttendanceUpdateRequest" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Scool/Timetables/Http/Requests/AttendanceUpdateRequest.html">AttendanceUpdateRequest</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Scool_Timetables_Models" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Scool/Timetables/Models.html">Models</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Scool_Timetables_Models_Attendance" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scool/Timetables/Models/Attendance.html">Attendance</a>                    </div>                </li>                            <li data-name="class:Scool_Timetables_Models_Desiratum" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scool/Timetables/Models/Desiratum.html">Desiratum</a>                    </div>                </li>                            <li data-name="class:Scool_Timetables_Models_ProposedLesson" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scool/Timetables/Models/ProposedLesson.html">ProposedLesson</a>                    </div>                </li>                            <li data-name="class:Scool_Timetables_Models_Shift" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scool/Timetables/Models/Shift.html">Shift</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Scool_Timetables_Presenters" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Scool/Timetables/Presenters.html">Presenters</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Scool_Timetables_Presenters_AttendancePresenter" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scool/Timetables/Presenters/AttendancePresenter.html">AttendancePresenter</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Scool_Timetables_Providers" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Scool/Timetables/Providers.html">Providers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Scool_Timetables_Providers_TimetablesServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scool/Timetables/Providers/TimetablesServiceProvider.html">TimetablesServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Scool_Timetables_Repositories" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Scool/Timetables/Repositories.html">Repositories</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Scool_Timetables_Repositories_AttendanceRepository" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scool/Timetables/Repositories/AttendanceRepository.html">AttendanceRepository</a>                    </div>                </li>                            <li data-name="class:Scool_Timetables_Repositories_AttendanceRepositoryEloquent" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scool/Timetables/Repositories/AttendanceRepositoryEloquent.html">AttendanceRepositoryEloquent</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Scool_Timetables_Transformers" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Scool/Timetables/Transformers.html">Transformers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Scool_Timetables_Transformers_AttendanceTransformer" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scool/Timetables/Transformers/AttendanceTransformer.html">AttendanceTransformer</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Scool_Timetables_Validators" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Scool/Timetables/Validators.html">Validators</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Scool_Timetables_Validators_AttendanceValidator" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scool/Timetables/Validators/AttendanceValidator.html">AttendanceValidator</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": ".html", "name": "", "doc": "Namespace "},{"type": "Namespace", "link": "Scool.html", "name": "Scool", "doc": "Namespace Scool"},{"type": "Namespace", "link": "Scool/Timetables.html", "name": "Scool\\Timetables", "doc": "Namespace Scool\\Timetables"},{"type": "Namespace", "link": "Scool/Timetables/Database.html", "name": "Scool\\Timetables\\Database", "doc": "Namespace Scool\\Timetables\\Database"},{"type": "Namespace", "link": "Scool/Timetables/Database/Seeds.html", "name": "Scool\\Timetables\\Database\\Seeds", "doc": "Namespace Scool\\Timetables\\Database\\Seeds"},{"type": "Namespace", "link": "Scool/Timetables/Http.html", "name": "Scool\\Timetables\\Http", "doc": "Namespace Scool\\Timetables\\Http"},{"type": "Namespace", "link": "Scool/Timetables/Http/Controllers.html", "name": "Scool\\Timetables\\Http\\Controllers", "doc": "Namespace Scool\\Timetables\\Http\\Controllers"},{"type": "Namespace", "link": "Scool/Timetables/Http/Requests.html", "name": "Scool\\Timetables\\Http\\Requests", "doc": "Namespace Scool\\Timetables\\Http\\Requests"},{"type": "Namespace", "link": "Scool/Timetables/Models.html", "name": "Scool\\Timetables\\Models", "doc": "Namespace Scool\\Timetables\\Models"},{"type": "Namespace", "link": "Scool/Timetables/Presenters.html", "name": "Scool\\Timetables\\Presenters", "doc": "Namespace Scool\\Timetables\\Presenters"},{"type": "Namespace", "link": "Scool/Timetables/Providers.html", "name": "Scool\\Timetables\\Providers", "doc": "Namespace Scool\\Timetables\\Providers"},{"type": "Namespace", "link": "Scool/Timetables/Repositories.html", "name": "Scool\\Timetables\\Repositories", "doc": "Namespace Scool\\Timetables\\Repositories"},{"type": "Namespace", "link": "Scool/Timetables/Transformers.html", "name": "Scool\\Timetables\\Transformers", "doc": "Namespace Scool\\Timetables\\Transformers"},{"type": "Namespace", "link": "Scool/Timetables/Validators.html", "name": "Scool\\Timetables\\Validators", "doc": "Namespace Scool\\Timetables\\Validators"},
            {"type": "Interface", "fromName": "Scool\\Timetables\\Repositories", "fromLink": "Scool/Timetables/Repositories.html", "link": "Scool/Timetables/Repositories/AttendanceRepository.html", "name": "Scool\\Timetables\\Repositories\\AttendanceRepository", "doc": "&quot;Interface AttendanceRepository&quot;"},
                    
            
            {"type": "Class",  "link": "CreateAttendancesTable.html", "name": "CreateAttendancesTable", "doc": "&quot;Class CreateAttendancesTable&quot;"},
                                                        {"type": "Method", "fromName": "CreateAttendancesTable", "fromLink": "CreateAttendancesTable.html", "link": "CreateAttendancesTable.html#method_up", "name": "CreateAttendancesTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateAttendancesTable", "fromLink": "CreateAttendancesTable.html", "link": "CreateAttendancesTable.html#method_down", "name": "CreateAttendancesTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateDesirataTable.html", "name": "CreateDesirataTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "CreateDesirataTable", "fromLink": "CreateDesirataTable.html", "link": "CreateDesirataTable.html#method_up", "name": "CreateDesirataTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateDesirataTable", "fromLink": "CreateDesirataTable.html", "link": "CreateDesirataTable.html#method_down", "name": "CreateDesirataTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateProposedLessonsTable.html", "name": "CreateProposedLessonsTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "CreateProposedLessonsTable", "fromLink": "CreateProposedLessonsTable.html", "link": "CreateProposedLessonsTable.html#method_up", "name": "CreateProposedLessonsTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateProposedLessonsTable", "fromLink": "CreateProposedLessonsTable.html", "link": "CreateProposedLessonsTable.html#method_down", "name": "CreateProposedLessonsTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateShiftsTable.html", "name": "CreateShiftsTable", "doc": "&quot;Class CreateShiftsTable&quot;"},
                                                        {"type": "Method", "fromName": "CreateShiftsTable", "fromLink": "CreateShiftsTable.html", "link": "CreateShiftsTable.html#method_up", "name": "CreateShiftsTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateShiftsTable", "fromLink": "CreateShiftsTable.html", "link": "CreateShiftsTable.html#method_down", "name": "CreateShiftsTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class", "fromName": "Scool\\Timetables\\Database\\Seeds", "fromLink": "Scool/Timetables/Database/Seeds.html", "link": "Scool/Timetables/Database/Seeds/DatabaseSeeder.html", "name": "Scool\\Timetables\\Database\\Seeds\\DatabaseSeeder", "doc": "&quot;Class DatabaseSeeder&quot;"},
                                                        {"type": "Method", "fromName": "Scool\\Timetables\\Database\\Seeds\\DatabaseSeeder", "fromLink": "Scool/Timetables/Database/Seeds/DatabaseSeeder.html", "link": "Scool/Timetables/Database/Seeds/DatabaseSeeder.html#method_run", "name": "Scool\\Timetables\\Database\\Seeds\\DatabaseSeeder::run", "doc": "&quot;Run the database seeds.&quot;"},
            
            {"type": "Class", "fromName": "Scool\\Timetables\\Http\\Controllers", "fromLink": "Scool/Timetables/Http/Controllers.html", "link": "Scool/Timetables/Http/Controllers/AttendancesController.html", "name": "Scool\\Timetables\\Http\\Controllers\\AttendancesController", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Scool\\Timetables\\Http\\Controllers\\AttendancesController", "fromLink": "Scool/Timetables/Http/Controllers/AttendancesController.html", "link": "Scool/Timetables/Http/Controllers/AttendancesController.html#method___construct", "name": "Scool\\Timetables\\Http\\Controllers\\AttendancesController::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Scool\\Timetables\\Http\\Controllers\\AttendancesController", "fromLink": "Scool/Timetables/Http/Controllers/AttendancesController.html", "link": "Scool/Timetables/Http/Controllers/AttendancesController.html#method_index", "name": "Scool\\Timetables\\Http\\Controllers\\AttendancesController::index", "doc": "&quot;Display a listing of the resource.&quot;"},
                    {"type": "Method", "fromName": "Scool\\Timetables\\Http\\Controllers\\AttendancesController", "fromLink": "Scool/Timetables/Http/Controllers/AttendancesController.html", "link": "Scool/Timetables/Http/Controllers/AttendancesController.html#method_store", "name": "Scool\\Timetables\\Http\\Controllers\\AttendancesController::store", "doc": "&quot;Store a newly created resource in storage.&quot;"},
                    {"type": "Method", "fromName": "Scool\\Timetables\\Http\\Controllers\\AttendancesController", "fromLink": "Scool/Timetables/Http/Controllers/AttendancesController.html", "link": "Scool/Timetables/Http/Controllers/AttendancesController.html#method_show", "name": "Scool\\Timetables\\Http\\Controllers\\AttendancesController::show", "doc": "&quot;Display the specified resource.&quot;"},
                    {"type": "Method", "fromName": "Scool\\Timetables\\Http\\Controllers\\AttendancesController", "fromLink": "Scool/Timetables/Http/Controllers/AttendancesController.html", "link": "Scool/Timetables/Http/Controllers/AttendancesController.html#method_edit", "name": "Scool\\Timetables\\Http\\Controllers\\AttendancesController::edit", "doc": "&quot;Show the form for editing the specified resource.&quot;"},
                    {"type": "Method", "fromName": "Scool\\Timetables\\Http\\Controllers\\AttendancesController", "fromLink": "Scool/Timetables/Http/Controllers/AttendancesController.html", "link": "Scool/Timetables/Http/Controllers/AttendancesController.html#method_update", "name": "Scool\\Timetables\\Http\\Controllers\\AttendancesController::update", "doc": "&quot;Update the specified resource in storage.&quot;"},
                    {"type": "Method", "fromName": "Scool\\Timetables\\Http\\Controllers\\AttendancesController", "fromLink": "Scool/Timetables/Http/Controllers/AttendancesController.html", "link": "Scool/Timetables/Http/Controllers/AttendancesController.html#method_destroy", "name": "Scool\\Timetables\\Http\\Controllers\\AttendancesController::destroy", "doc": "&quot;Remove the specified resource from storage.&quot;"},
            
            {"type": "Class", "fromName": "Scool\\Timetables\\Http\\Controllers", "fromLink": "Scool/Timetables/Http/Controllers.html", "link": "Scool/Timetables/Http/Controllers/Controller.html", "name": "Scool\\Timetables\\Http\\Controllers\\Controller", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Scool\\Timetables\\Http\\Requests", "fromLink": "Scool/Timetables/Http/Requests.html", "link": "Scool/Timetables/Http/Requests/AttendanceCreateRequest.html", "name": "Scool\\Timetables\\Http\\Requests\\AttendanceCreateRequest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Scool\\Timetables\\Http\\Requests\\AttendanceCreateRequest", "fromLink": "Scool/Timetables/Http/Requests/AttendanceCreateRequest.html", "link": "Scool/Timetables/Http/Requests/AttendanceCreateRequest.html#method_authorize", "name": "Scool\\Timetables\\Http\\Requests\\AttendanceCreateRequest::authorize", "doc": "&quot;Determine if the user is authorized to make this request.&quot;"},
                    {"type": "Method", "fromName": "Scool\\Timetables\\Http\\Requests\\AttendanceCreateRequest", "fromLink": "Scool/Timetables/Http/Requests/AttendanceCreateRequest.html", "link": "Scool/Timetables/Http/Requests/AttendanceCreateRequest.html#method_rules", "name": "Scool\\Timetables\\Http\\Requests\\AttendanceCreateRequest::rules", "doc": "&quot;Get the validation rules that apply to the request.&quot;"},
            
            {"type": "Class", "fromName": "Scool\\Timetables\\Http\\Requests", "fromLink": "Scool/Timetables/Http/Requests.html", "link": "Scool/Timetables/Http/Requests/AttendanceUpdateRequest.html", "name": "Scool\\Timetables\\Http\\Requests\\AttendanceUpdateRequest", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Scool\\Timetables\\Http\\Requests\\AttendanceUpdateRequest", "fromLink": "Scool/Timetables/Http/Requests/AttendanceUpdateRequest.html", "link": "Scool/Timetables/Http/Requests/AttendanceUpdateRequest.html#method_authorize", "name": "Scool\\Timetables\\Http\\Requests\\AttendanceUpdateRequest::authorize", "doc": "&quot;Determine if the user is authorized to make this request.&quot;"},
                    {"type": "Method", "fromName": "Scool\\Timetables\\Http\\Requests\\AttendanceUpdateRequest", "fromLink": "Scool/Timetables/Http/Requests/AttendanceUpdateRequest.html", "link": "Scool/Timetables/Http/Requests/AttendanceUpdateRequest.html#method_rules", "name": "Scool\\Timetables\\Http\\Requests\\AttendanceUpdateRequest::rules", "doc": "&quot;Get the validation rules that apply to the request.&quot;"},
            
            {"type": "Class", "fromName": "Scool\\Timetables\\Models", "fromLink": "Scool/Timetables/Models.html", "link": "Scool/Timetables/Models/Attendance.html", "name": "Scool\\Timetables\\Models\\Attendance", "doc": "&quot;Class Attendance&quot;"},
                    
            {"type": "Class", "fromName": "Scool\\Timetables\\Models", "fromLink": "Scool/Timetables/Models.html", "link": "Scool/Timetables/Models/Desiratum.html", "name": "Scool\\Timetables\\Models\\Desiratum", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Scool\\Timetables\\Models", "fromLink": "Scool/Timetables/Models.html", "link": "Scool/Timetables/Models/ProposedLesson.html", "name": "Scool\\Timetables\\Models\\ProposedLesson", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Scool\\Timetables\\Models", "fromLink": "Scool/Timetables/Models.html", "link": "Scool/Timetables/Models/Shift.html", "name": "Scool\\Timetables\\Models\\Shift", "doc": "&quot;Class Shift&quot;"},
                                                        {"type": "Method", "fromName": "Scool\\Timetables\\Models\\Shift", "fromLink": "Scool/Timetables/Models/Shift.html", "link": "Scool/Timetables/Models/Shift.html#method_timeslots", "name": "Scool\\Timetables\\Models\\Shift::timeslots", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Scool\\Timetables\\Presenters", "fromLink": "Scool/Timetables/Presenters.html", "link": "Scool/Timetables/Presenters/AttendancePresenter.html", "name": "Scool\\Timetables\\Presenters\\AttendancePresenter", "doc": "&quot;Class AttendancePresenter&quot;"},
                                                        {"type": "Method", "fromName": "Scool\\Timetables\\Presenters\\AttendancePresenter", "fromLink": "Scool/Timetables/Presenters/AttendancePresenter.html", "link": "Scool/Timetables/Presenters/AttendancePresenter.html#method_getTransformer", "name": "Scool\\Timetables\\Presenters\\AttendancePresenter::getTransformer", "doc": "&quot;Transformer&quot;"},
            
            {"type": "Class", "fromName": "Scool\\Timetables\\Providers", "fromLink": "Scool/Timetables/Providers.html", "link": "Scool/Timetables/Providers/TimetablesServiceProvider.html", "name": "Scool\\Timetables\\Providers\\TimetablesServiceProvider", "doc": "&quot;Created by PhpStorm.&quot;"},
                                                        {"type": "Method", "fromName": "Scool\\Timetables\\Providers\\TimetablesServiceProvider", "fromLink": "Scool/Timetables/Providers/TimetablesServiceProvider.html", "link": "Scool/Timetables/Providers/TimetablesServiceProvider.html#method_register", "name": "Scool\\Timetables\\Providers\\TimetablesServiceProvider::register", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Scool\\Timetables\\Providers\\TimetablesServiceProvider", "fromLink": "Scool/Timetables/Providers/TimetablesServiceProvider.html", "link": "Scool/Timetables/Providers/TimetablesServiceProvider.html#method_boot", "name": "Scool\\Timetables\\Providers\\TimetablesServiceProvider::boot", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Scool\\Timetables\\Repositories", "fromLink": "Scool/Timetables/Repositories.html", "link": "Scool/Timetables/Repositories/AttendanceRepository.html", "name": "Scool\\Timetables\\Repositories\\AttendanceRepository", "doc": "&quot;Interface AttendanceRepository&quot;"},
                    
            {"type": "Class", "fromName": "Scool\\Timetables\\Repositories", "fromLink": "Scool/Timetables/Repositories.html", "link": "Scool/Timetables/Repositories/AttendanceRepositoryEloquent.html", "name": "Scool\\Timetables\\Repositories\\AttendanceRepositoryEloquent", "doc": "&quot;Class AttendanceRepositoryEloquent&quot;"},
                                                        {"type": "Method", "fromName": "Scool\\Timetables\\Repositories\\AttendanceRepositoryEloquent", "fromLink": "Scool/Timetables/Repositories/AttendanceRepositoryEloquent.html", "link": "Scool/Timetables/Repositories/AttendanceRepositoryEloquent.html#method_model", "name": "Scool\\Timetables\\Repositories\\AttendanceRepositoryEloquent::model", "doc": "&quot;Specify Model class name&quot;"},
                    {"type": "Method", "fromName": "Scool\\Timetables\\Repositories\\AttendanceRepositoryEloquent", "fromLink": "Scool/Timetables/Repositories/AttendanceRepositoryEloquent.html", "link": "Scool/Timetables/Repositories/AttendanceRepositoryEloquent.html#method_validator", "name": "Scool\\Timetables\\Repositories\\AttendanceRepositoryEloquent::validator", "doc": "&quot;Specify Validator class name&quot;"},
                    {"type": "Method", "fromName": "Scool\\Timetables\\Repositories\\AttendanceRepositoryEloquent", "fromLink": "Scool/Timetables/Repositories/AttendanceRepositoryEloquent.html", "link": "Scool/Timetables/Repositories/AttendanceRepositoryEloquent.html#method_boot", "name": "Scool\\Timetables\\Repositories\\AttendanceRepositoryEloquent::boot", "doc": "&quot;Boot up the repository, pushing criteria&quot;"},
            
            {"type": "Class", "fromName": "Scool\\Timetables\\Transformers", "fromLink": "Scool/Timetables/Transformers.html", "link": "Scool/Timetables/Transformers/AttendanceTransformer.html", "name": "Scool\\Timetables\\Transformers\\AttendanceTransformer", "doc": "&quot;Class AttendanceTransformer&quot;"},
                                                        {"type": "Method", "fromName": "Scool\\Timetables\\Transformers\\AttendanceTransformer", "fromLink": "Scool/Timetables/Transformers/AttendanceTransformer.html", "link": "Scool/Timetables/Transformers/AttendanceTransformer.html#method_transform", "name": "Scool\\Timetables\\Transformers\\AttendanceTransformer::transform", "doc": "&quot;Transform the \\Attendance entity&quot;"},
            
            {"type": "Class", "fromName": "Scool\\Timetables\\Validators", "fromLink": "Scool/Timetables/Validators.html", "link": "Scool/Timetables/Validators/AttendanceValidator.html", "name": "Scool\\Timetables\\Validators\\AttendanceValidator", "doc": "&quot;&quot;"},
                    
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


